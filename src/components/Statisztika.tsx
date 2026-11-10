import type { StatisztikaProps } from "../types/props";

function Statisztika({kerekparLista}:StatisztikaProps) {
    function rendezes(asc: Boolean) {
        if (asc) {
            return kerekparLista.sort((a,b) => a.napiDij - b.napiDij)[0].napiDij;
        }
        else {
            return kerekparLista.sort((a,b) => b.napiDij - a.napiDij)[0].napiDij;
        }
    }
    
    return (
        <>
            <div className="row">
                <div className="col-sm-3 mx-auto text-center statisztika rounded-4">
                    <p>Kerékpárok száma: <b>{kerekparLista.length}</b></p>
                    <p>Legolcsóbb kerékpár díja: <b>{rendezes(true)} Ft</b></p>
                    <p>Legdrágább kerékpár díja: <b>{rendezes(false)} Ft</b></p>
                </div>
            </div>
        </>
    )
} 

export default Statisztika