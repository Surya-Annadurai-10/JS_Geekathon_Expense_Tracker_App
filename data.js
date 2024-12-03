const arr = [
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'groceries',name:'tomato',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'groceries',name:'carrot',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'utilities',name:'slipper',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'utilities',name:'shoes',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'entertainment',name:'snacks',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'entertainment',name:'cinema',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'study',name:'books',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'study',name:'courses',amount:400},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'medical',name:'face wash',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'medical',name:'Tablets',amount:500},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'incentive',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'miscellaneous',name:'to father',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'miscellaneous',name:'to mother',amount:400}
    
];

localStorage.setItem("data" ,JSON.stringify(arr))


const data = [
    { id: 0, category: "Income", count: 0 },
    { id: 1, category: "Groceries", count: 0 },
    { id: 2, category: "Utilities", count: 0 },
    { id: 3, category: "Entertainment", count: 0 },
    { id: 4, category: "Study", count: 0 },
    { id: 5, category: "Medical", count: 0 },
    { id: 6, category: "Miscellaneous", count: 0 },
  ];

console.log(arr);

