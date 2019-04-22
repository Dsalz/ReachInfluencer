const navToggle = document.getElementById("dashboard-nav-toggle");
const dashboardNav = document.getElementById("dashboard-nav");
const sidebarToggle = document.getElementById("toggle-sidebar");
const dashboardSidebar = document.getElementById("dashboard-sidebar");
const notificationsLink = document.getElementById("notifications-link");
const notificationsDiv = document.getElementById("notifications-div");
const notificationsWrapper = document.getElementById("notifications-wrapper");
const modalBtn = document.getElementById("show-modal");
const modalWrapper = document.getElementById("modal-wrapper");
const modalDiv = document.getElementById("modal-div");

navToggle.addEventListener('click', () => {
  dashboardNav.classList.toggle("responsive-navbar");
})

sidebarToggle.addEventListener('click', () => {
  dashboardSidebar.classList.toggle("responsive-sidebar");
})

notificationsLink.addEventListener('click', () => {
  notificationsWrapper.classList.toggle("show-notifications");
})

notificationsWrapper.addEventListener('click', () => {
  notificationsWrapper.classList.toggle("show-notifications");
})

notificationsDiv.addEventListener('click', (e) => {
  e.stopPropagation();
})

if(modalBtn && modalDiv && modalWrapper){
  modalBtn.addEventListener('click', () => {
    modalWrapper.classList.toggle("show-modal");
  })
  
  modalWrapper.addEventListener('click', () => {
    modalWrapper.classList.toggle("show-modal");
  })
  
  modalDiv.addEventListener('click', (e) => {
    e.stopPropagation();
  })
}



Highcharts.chart('social-dist', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  }, 
  legend: {
    enabled: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: false
    }
  },
  series: [{
    name: 'Distribution',
    colorByPoint: true,
    data: [{
      name: 'Youtube',
      y: 61.41,
      color: '#ED3833'
    }, {
      name: 'Instagram',
      y: 11.84,
      color: '#E223E2'
    }, {
      name: 'Twitter',
      y: 10.85,
      color: '#38A1F3'
    }]
  }]
});

Highcharts.chart('analytics-category-dist', {
  chart: {
    type: 'column',
    height: '300',
    width: '900'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      'Food',
      'Health',
      'Sports',
      'Music',
      'Movies',
      'Tech',
      'Books',
      'Art',
    ],
    title: {
      text: 'Categories'
    },
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Influencers'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Influencers',
    data: [20, 11, 30, 5, 15, 16, 27, 34],
    color: 'rgba(6, 180, 254, .1)'
  },]
});


