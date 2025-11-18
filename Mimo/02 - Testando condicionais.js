// Testando condicionais.

let weapon_01 = "sword";

let weapon_02 = "stick";

if (weapon_01 === "sword") {
    console.log("Use your sword to kill the dragon.");
}
else if (weapon_01 === "bow and arrow") {
    console.log("Use your Bow and arrow to kill the dragon");
}
else if (weapon_01 === "empty" && weapon_02 === "sword") {
    console.log("You dont have a mean weapon, use your sword. ");
}
else if (weapon_01 === "empty" && weapon_02 === "bow and arrow") {
    console.log("You dont have a mean weapon, use your bow and arrow. ");
}
else {
    console.log("You don't have a weapon for this fight! Go get some reinforcements!")
}
