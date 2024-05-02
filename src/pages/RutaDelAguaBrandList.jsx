import RutaDelAguaDetail from "../assets/components/RutaDelAguaDetail";
import Footer from "../components/Footer";

const RutaDelAguaBrandList = [
    {
        id: 1,
        brand: "BH",
        stock: 2
    },{
        id: 2,
        brand: "Orbea",
        stock: 4
    },{
        id: 2,
        brand: "BMC",
        stock: 1
    }
]

export default function RutaDelAguaBrandList(){
    return(
        <>
        <p>Lista de rutas</p>
        <ul>
            { RutaDelAguaBrandList.map((b) => <RutaDelAguaDetail key={b} brand={b.brand} stock={b.stock}/>) }
        </ul>
        <Footer />
        </>
    );
}