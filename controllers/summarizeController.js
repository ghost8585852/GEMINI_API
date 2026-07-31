import { summarizeWithGemini } from '../service/geminiService.js'


export async function summarizeText(req, res) {
try {
const { text } = req.body
if (!text) return res.status(400).json({ error: 'text is required' })


const summary = await summarizeWithGemini(text)
res.json({ summary })
} catch (err) {
console.error(err)
res.status(500).json({ error: 'failed to summarize' })
}
}
