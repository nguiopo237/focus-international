var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  const PORT = 3e3;
  let aiClient = null;
  function getAi() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
      }
      aiClient = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
    }
    return aiClient;
  }
  app.post("/api/analyze-project", async (req, res) => {
    try {
      const { name, company, country, projectType, budget, siteArea, description } = req.body;
      if (!name || !projectType || !description) {
        res.status(400).json({ error: "Missing required inquiry fields" });
        return;
      }
      const ai = getAi();
      const userPrompt = `
        Draft an elegant, luxury architectural concept brief on behalf of Princy NYANGON, Lead Architect at Focus International Group, based on the following client inquiry:
        
        - Client Name: ${name}
        - Client Company: ${company || "Private Stakeholder"}
        - Target Site Country: ${country || "Cameroon"}
        - Architectural Typology: ${projectType}
        - Estimated Budget: ${budget || "To be discussed"}
        - Project Site Area: ${siteArea || "To be confirmed"}
        - Project Intent & Description: "${description}"

        Embody the identity of a world-class, visionary Pan-African Creative Director. 
        Adopt the architectural philosophies of Sn\xF8hetta, Foster + Partners, and OMA.
        The brief must be premium, highly technical yet visual, and reject generic corporate templates.
        Frame the project through the lens of modern African monumentality and passive thermodynamic design.
      `;
      const systemInstruction = `
        You are Princy NYANGON, the EAMAU-graduated Lead Architect and founder of Focus International Group, a premier Pan-African architectural brand based in Yaound\xE9, Cameroon.
        You speak with deep creative authority, poetic minimalism, and rigorous architectural credibility. 
        Your response must represent a sophisticated, world-class design proposal.
        Do not cite external links or use cheap sales words. 
        Speak about structural physics, passive climate ventilation, local noble materials (such as Padouk wood, clay blocks, basalt rock, volcanic ash concrete), and African spatial identities re-conceived.
        You must return a valid structured JSON output matching the required schema.
      `;
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: userPrompt,
        config: {
          systemInstruction,
          temperature: 0.95,
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              personalGreeting: {
                type: import_genai.Type.STRING,
                description: "A short, highly premium, welcoming personal paragraph addressed to the client, acknowledging their location and visionary leadership. Sign it formally as Princy."
              },
              visionStatement: {
                type: import_genai.Type.STRING,
                description: "A comprehensive, poetic, and structurally sound architectural vision statement detailing the conceptual soul of this proposed building (2-3 paragraphs)."
              },
              spatialStrategy: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "Precisely 3 core spatial interventions explaining how circulation and light are distributed (e.g. triple-height voids, horizontal trade-wind galleries, double-helix columns)."
              },
              suggestedMaterials: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "Precisely 3 noble regional materials specifically selected for this geography (mentioning structural glulam timber, rammed earth, volcanic clinker clay bricks, or basalt aggregates)."
              },
              environmentalTactics: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "Precisely 3 passive environmental engineering vectors designed to bypass cooling HVAC reliance in tropical climates (e.g. convection masonry labyrinths, dual-skin shaded envelopes, rainwater vertical cooling)."
              },
              approximateRatios: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "Exactly 3 stylized technical performance parameters (e.g. 'Thermodynamic Air Flush: 12.4 volumes/hr', 'Embodied Wood Mass: 45%', 'Passive Shade Coverage: 78%')."
              }
            },
            required: [
              "personalGreeting",
              "visionStatement",
              "spatialStrategy",
              "suggestedMaterials",
              "environmentalTactics",
              "approximateRatios"
            ]
          }
        }
      });
      const responseText = response.text;
      if (!responseText) {
        throw new Error("Zero content returned from Gemini model.");
      }
      const analyzedBrief = JSON.parse(responseText.trim());
      res.json(analyzedBrief);
    } catch (error) {
      console.error("Gemini Project Analysis Error:", error);
      res.status(500).json({
        error: "Architectural Engine Connection Timeout",
        details: error?.message || "Verify your API configuration."
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Focus International Group Server IP: 0.0.0.0 Port: ${PORT}]`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
