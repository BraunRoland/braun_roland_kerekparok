import { useEffect, useState } from "react";
import type { KerekparokProps } from "../types/props";

function Kerekparok({kerekpar}: KerekparokProps) {
    const [lathato, setLathato] = useState<Boolean>(false);
    return (
        <>
        <div className="row">
            <div className="col-sm-4 mx-auto text-center">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title" style={{color: kerekpar.szin}}>{kerekpar.nev}</h3>
                        {lathato && (
                            <div className="reszletek">
                                <p className="card-text">Típusa: <em>{kerekpar.tipus}</em></p>
                                <p className="card-text">Napi díj: <u>{kerekpar.napiDij}</u> Ft</p>
                            </div>
                        )}
                        <button onClick={() => (setLathato(!lathato))} className={`btn btn-${lathato? "danger" : "success"}`}>Részletek {lathato? "elrejtése": "mutatása"}</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Kerekparok;