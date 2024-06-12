import { LayoutDashboard } from "@/components/LayoutDashboard";
import { verificaToken } from "@/services/token";
import {cookies} from 'next/headers';
import { redirect } from "next/navigation";

export default function Dashboard() {
    
    const cookie = cookies();
    const token = cookie.get('painel1pitchau.token')
    
    if(!token?.value || verificaTokenExpirado(token.value)){
       redirect('/login')
    }

    return(
        <LayoutDashboard>
            
        </LayoutDashboard>
    )
}

function verificaTokenExpirado(value: string): boolean {
    throw new Error("Function not implemented.");
}