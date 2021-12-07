export const Categories = {
    expenses: [
        "clothing",
        "Gym",
        "Supermarket",
        "taxes",
        "Internet services",
    ],
    income: [
        "salary",
        "rents",
        "sales",
        "fixed term"
    ]
};

export function allCategories(Categories){ 

  
var allCat = []
Categories?.expenses.forEach( e => {
        allCat.push(e);
    });
Categories?.income.forEach( e => {
        allCat.push(e);
    });

return allCat;
    
} 