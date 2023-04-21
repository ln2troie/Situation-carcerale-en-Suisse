const dataArray = [20,40,50];
const width = 500;
const heigth = 500; 

const widthScale = d3.scale.linear()
                .domain([0,60])
                .range([0,width]);

const color = d3.scale.linear()
            .domain([0,60])
            .range(["red","blue"]);

const canvas = d3.select("body")
            .append("svg")
            .attr("width",500)
            .attr("heigth",500);

const bars = canvas.selectAll("rect")
            .data(dataArray)
            .enter()
                .append("rect")
                .attr("width", d=> widthScale(d)) 
                .attr("heigth",50) 
                .attr("fill", d=>color(d))
                .attr("y",(d,i)=> i*100);
        