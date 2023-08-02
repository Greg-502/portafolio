import { motion } from "framer-motion"
import React, { useContext } from 'react'
import { RefContext } from 'src/utils/Context/RefContext'

export default function ButtonToTop() {
    const { HandleScroll, menu } = useContext(RefContext)

    return(
        <motion.span
            className="z-10 fixed bottom-3 shadow-lg 
                md:bottom-5 right-3 md:right-5 bg-purple-500 
                rounded-full w-12 h-12 cursor-pointer opacity-50 hover:opacity-100
                "
            whileHover={{ scale:1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => HandleScroll(menu.current)}
        >
            <box-icon name='up-arrow-alt' size='lg' color='#fff'></box-icon>
        </motion.span>
    )
}

