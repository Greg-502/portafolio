import { motion } from "framer-motion"
import React, { useContext } from 'react'
import { RefContext } from 'src/utils/Context/RefContext'

export default function ButtonToTop() {
    const { HandleScroll, menu } = useContext(RefContext)

    return(
        <motion.div
            className="z-10 fixed bottom-3 shadow-lg justify-center items-center flex
                md:bottom-5 right-3 md:right-5 bg-purple-500 
                rounded-full w-12 h-12 cursor-pointer opacity-50 hover:opacity-100
            "
            whileHover={{ scale:1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => HandleScroll(menu.current)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </motion.div>
    )
}

