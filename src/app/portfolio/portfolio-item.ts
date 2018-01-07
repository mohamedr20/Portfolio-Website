export class PortfolioItem {
    imgUrl:string;
    heading:string;
    sub_heading:string;
    description:string;

    constructor(imgUrl:string,heading:string,sub_heading:string,description:string){
        this.imgUrl = imgUrl;
        this.heading = heading;
        this.description = description;
        this.sub_heading = sub_heading;
    }
}
