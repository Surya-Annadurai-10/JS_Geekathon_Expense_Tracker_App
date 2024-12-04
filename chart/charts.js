function updateCharts(){
    let bar;
let doughnut;
let pie;
let radar;
let line;
console.log(arr);
const categoryArr = data.map((ele) => ele.category.toLowerCase());
  console.log(categoryArr);
  doughnut = document.querySelector(".dough-nut")
  bar = document.querySelector(".bar");
  pie = document.querySelector(".pie");
  radar = document.querySelector(".radar");
  line = document.querySelector(".line");
    bar.innerHTML = `
         <div class="chart bar-chart">
                <canvas id="myChart-1"></canvas>
        </div>
    `;
    doughnut.innerHTML = `
         <div class="chart d-nut">
                <canvas id="myChart-2"></canvas>
        </div>
    `;

    pie.innerHTML = `
    <div class="chart pie-chart">
           <canvas id="myChart-3"></canvas>
   </div>
`;

radar.innerHTML = `
<div class="chart radar-chart">
       <canvas id="myChart-4"></canvas>
</div>
`;

line.innerHTML = `
<div class="chart line-chart">
       <canvas id="myChart-5"></canvas>
</div>
`;
    const ctx2 =  document.getElementById("myChart-2");
    const ctx1 = document.getElementById("myChart-1");
    const ctx3 = document.getElementById("myChart-3");
    const ctx4 = document.getElementById("myChart-4");
    const ctx5 = document.getElementById("myChart-5");

    for (let i = 0; i < categoryArr.length; i++) {
      let value = arr
        .filter((ele) => {
            console.log(ele.category == categoryArr[i]);
          return ele.category == categoryArr[i];
        })
        .reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0);


      data[i].count += value;
    //   console.log(data);
    }

    new Chart(ctx1, {
      type: "bar",
      data: {
        labels: data.map((yr) => yr.category),
        datasets: [
          {
              label: ' Revenue Flow',
            data: data.map((value) => value.count),
            backgroundColor: [
              "rgb(139,121,241,1)",
              "rgb(139,121,241,0.5)",
              "rgb(139,121,241,0.5)",
              "rgb(139,121,241,0.5)",
              "rgb(139,121,241,0.5)",
              "rgb(139,121,241,0.5)",
              "rgb(139,121,241,0.5)",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true, // Optionally, hide the legend
          },
        },
      },
    });

    new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: data.map((yr) => yr.category),
        datasets: [
          {
              label: 'Revenue Flow',
            data: data.map((value) => value.count),
            backgroundColor: [
              "rgb(138,121,238)",
              "rgb(219,253,130)",
              "rgb(62,172,145)",
              "rgb(242,74,24)",
               "purple",
              "rgb(1,224,255)",
              "rgb(234,06,137)",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true, // Optionally, hide the legend
          },
        },
      },
    });

    new Chart(ctx3, {
        type: "pie",
        data: {
          labels: data.map((yr) => yr.category),
          datasets: [
            {
                label: ' Revenue Flow',
              data: data.map((value) => value.count),
              backgroundColor: [
                "rgb(138,121,238)",
                "rgb(219,253,130)",
                "rgb(62,172,145)",
                "rgb(242,74,24)",
                "purple",
                "rgb(1,224,255)",
                "rgb(234,06,137)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true, // Optionally, hide the legend
            },
          },
        },
      });

      new Chart(ctx4, {
        type: "radar",
        data: {
          labels: data.map((yr) => yr.category),
          datasets: [
            {
                label: 'Revenue Flow',
              data: data.map((value) => value.count),
            //   data: [500,200,300,400,500,600,700],
              backgroundColor: [
                "rgb(138,121,238)",
                "rgb(219,253,130)",
                "rgb(62,172,145)",
                "rgb(242,74,24)",
                "purple",
                "rgb(1,224,255)",
                "rgb(234,06,137)",
              ],
          
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true, // Optionally, hide the legend
            },
          },
        },
      });

      new Chart(ctx5, {
        type: "line",
        data: {
          labels: data.map((yr) => yr.category),
          datasets: [
            {
                label: 'Revenue Flow',
              data: data.map((value) => value.count),
              backgroundColor: [
                "rgb(138,121,238)",
                "rgb(219,253,130)",
                "rgb(62,172,145)",
                "rgb(242,74,24)",
                "purple",
                "rgb(1,224,255)",
                "rgb(234,06,137)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true, // Optionally, hide the legend
            },
          },
        },
      });

  
}

window.onload = ()=>{
    updateCharts();
}