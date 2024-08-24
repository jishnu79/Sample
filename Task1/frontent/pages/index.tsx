import Image from "next/image";
import { Inter } from "next/font/google";
import { RxBorderWidth } from "react-icons/rx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getText, sentText } from "@/api/textapi";
import Cards from "@/component/Cards";

export default function Home() {
  const [input, setInput] = useState<string>()
  const [text, setTesxt] = useState([])

  const handleClick = (e: any) => {
    e.preventDefault()
    const message = {
      content: input
    }
    if (!message.content) {
      toast.error("Type somthing")
    } else {
      sentText(message)
      toast.success("message created!")
      setInput('')
    }
  }

  useEffect(() => {
    getText().then((data: any) => {
      setTesxt(data?.data)
    })
  })
  return (
    <>
      {/* Header */}
      <div className="bg-black flex items-center gap-5">
        <RxBorderWidth color="white" />
        <h1 className=" text-white text-xl">Notes</h1>
      </div>
      {/* Body */}
      <div className="bg-green-200 min-h-screen">
        <div className="flex justify-center py-5 gap-5">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            type="text"
            placeholder="Take a note...."
            className="p-3 rounded-lg" />
          <button
            onClick={(e: any) => {
              handleClick(e)
            }}
            className="bg-slate-400 rounded-lg"
          >Add</button>
        </div>
        <div className="grid grid-cols-12 gap-4 p-5">
          {
            text?.map((data: any, ind: number) => (
              <Cards key={ind} data={data} />
            ))
          }
        </div>
      </div>
    </>
  );
}
