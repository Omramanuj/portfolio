"use client";
import { FiDownload } from 'react-icons/fi';
import { useToast } from "@/hooks/use-toast"
import {Button} from "@/components/ui/button.tsx"
const CV = () => {
    const {toast}=useToast();
  return (
    <div className="'h-full w-full flex justify-center">
                <a
                href="https://drive.google.com/uc?export=download&id=10Wwr9OGLhu-k10K2yt-dEoc70qOLj9F4"
                download
              >
                <Button variant="outline" size="lg" className='uppercase flex items-center gap-2' onClick={()=>{
                  toast({
                    title: 'Downloading CV',
                  })
                }}>
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              </div>
  )
}

export default CV