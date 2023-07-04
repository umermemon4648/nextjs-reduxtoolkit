// import { useRouter } from 'next/navigation'
// import { NextResponse } from "next/server";



export default function handler(req, res){
    //    const router = useRouter()
    //     const id = router.query
    
    const query = req.query;
    const { id } = query;
    
    
        if(req.method==="GET"){
            res.status(200).json({ id, message: `Get user with ID ${id}` });
        }
    }