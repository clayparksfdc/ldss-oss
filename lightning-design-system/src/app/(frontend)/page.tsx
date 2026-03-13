import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { processMarkdown } from "@/lib/markdown"

export default async function Home() {
  const filePath = path.join(process.env.CONTENT_DIR || path.resolve(process.cwd(), '..', 'content'), "home.md")
  const raw = fs.readFileSync(filePath, "utf-8")
  const { content } = matter(raw)
  const html = await processMarkdown(content)

  return (
    <div className="max-w-6xl mx-auto">
      <article
        className="content-blocks"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
