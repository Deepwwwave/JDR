import { Phara, Cornog } from "./Perso.class.js"; 

$(()=>{
    Phara.updateStatHero()
    Cornog.updateStatMonster()
})

$(".power").on("click",  Phara.usePower(Cornog))
$(".attack").on("click",  Phara.attack(Cornog));
// $(".defense").on("click",  Phara.defense());


