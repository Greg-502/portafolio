import toast from "react-hot-toast";

export const alerts = () => {
    toast.error('Error:\nMás detalles en la consola.',
    {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    })
}
