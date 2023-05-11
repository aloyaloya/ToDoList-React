export const targetsCategory = [
    {categoryName: 'Home', color: '#7272f7'},
    {categoryName: 'Work', color: '#f7c672'},
    {categoryName: 'Study', color: '#f77272'},
];

export const targetsList = [
    {targetName: 'Сходить на учебу', category: 'Study', description: 'Сходить на первую пару в 12:45'},
    {targetName: 'test3', category: 'Study', description: 'test3description'},
    {targetName: 'test2', category: 'work', description: 'test2description'},
    {targetName: 'Сходить на учебу', category: 'Study', description: 'Сходить на первую пару в 12:45'},
    {targetName: 'Сходить на учебу', category: 'Study', description: 'Сходить на первую пару в 12:45'},
    {targetName: 'test1', category: 'Work', description: 'test description1'},
    {targetName: 'test', category: 'Home', description: 'fffffff'},
];

export const takeCategories = (target) => {
    for (let item of targetsCategory) {
        if(target.category.toLowerCase() === item.categoryName.toLowerCase()) {
            return item.color;
        }
    }
};

export const targetsFilter = (request, ourTargets) => {
    let searchResult = [];

    for(let item of ourTargets) {
        if(item.targetName.toLowerCase().includes(request.toLowerCase())) {
            searchResult.push(item);
        }
    }

    return searchResult;
}



export const generateColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}