document.addEventListener("DOMContentLoaded", () => {
    const recipes = document.querySelectorAll(".recipe-list article");

    recipes.forEach(recipe => {
        recipe.addEventListener("mouseenter", () => {
            recipe.style.transform = "scale(1.05)";
            recipe.style.transition = "transform 0.3s";
        });

        recipe.addEventListener("mouseleave", () => {
            recipe.style.transform = "scale(1)";
        });

        
    });
});