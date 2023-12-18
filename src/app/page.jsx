import Link from "next/link"

export default function Home() {  
  
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Serkan.codes Web Site</h1>
      <p>Hi My Name is Serkan. This is my personal blog and you can find information <Link href="/about">about me</Link></p>
        
    </div>
  )
}
