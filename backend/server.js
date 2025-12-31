import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({
        reply: "No email content provided.",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a professional email assistant. Write a polite, clear, and professional reply.",
        },
        {
          role: "user",
          content: `Write a reply to this email:\n\n${email}`,
        },
      ],
      temperature: 0.4,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("OpenAI error:", error.message);

    res.json({
      reply:
        "Thank you for reaching out. I’ll review this and get back to you shortly.",
    });
  }
});

app.listen(3000, () => {
  console.log("AI backend running on http://localhost:3000");
});
