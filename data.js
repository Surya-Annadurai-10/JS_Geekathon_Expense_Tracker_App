const arr = [
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'groceries',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'groceries',name:'salary',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'utilities',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'utilities',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'entertainment',name:'salary',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'entertainment',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'study',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'study',name:'salary',amount:400},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'medical',name:'salary',amount:300},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'medical',name:'salary',amount:500},
    {date: 2,month:  12,year: 2024,type: 'income',category: 'income',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'miscellaneous',name:'salary',amount:200},
    {date: 2,month:  12,year: 2024,type: 'expenses',category: 'miscellaneous',name:'salary',amount:400}
    
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

