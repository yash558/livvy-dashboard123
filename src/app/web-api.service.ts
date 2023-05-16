import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WebApiService {
  // private url = "http://localhost:3000/";
  // public imageUrl = "http://localhost:3000/public/images/";
  private url = "http://43.205.235.111:3000/";
  public imageUrl = "http://43.205.235.111:3000/public/images/";

  constructor(private http: HttpClient) {}

  isLogedIn() {
    return sessionStorage.getItem("loginId");
  }

  getAllUser(data: any) {
    return this.http.post(this.url + "api/v1/getAllUser", data);
  }
  createUser(data: any) {
    return this.http.post(this.url + "api/v1/createUser", data);
  }
  updateOrder(data: any) {
    return this.http.post(this.url + "api/v1/updateOrder", data);
  }
  getUserById(id: any) {
    return this.http.get(this.url + "api/v1/user/" + id);
  }
  uploadImage(dam: any) {
    return this.http.post(this.url + "api/v1/uploadImage", dam);
  }
  getAllProduct(data: any) {
    return this.http.post(this.url + "api/v1/getAllProduct", data);
  }
  getCategory(id = "") {
    return this.http.get(this.url + "api/v1/getCategory");
  }
  getAllBusinessUser(id = "") {
    return this.http.get(this.url + "api/v1/getAllBusinessUser");
  }
  getSubCategoryById(data: any) {
    return this.http.post(this.url + "api/v1/getSubCategory", data);
  }
  addProduct(data: any) {
    return this.http.post(this.url + "api/v1/addProduct", data);
  }
  getProductById(id: any) {
    return this.http.get(this.url + "api/v1/productById/" + id);
  }
  getAllOrder(data: any) {
    return this.http.post(this.url + "api/v1/getAllOrder", data);
  }
  getDashboardCount(id = "") {
    return this.http.get(this.url + "api/v1/getDashboardCount");
  }
  getAllUserByType(data: any) {
    return this.http.post(this.url + "api/v1/getAllUserByType", data);
  }
  doLogin(data: any) {
    return this.http.post(this.url + "api/v1/doLogin", data);
  }
  productExcel(data: any) {
    return this.http.post(this.url + "api/v1/productExcel", data);
  }
  getDashboardCountByBusiness(data: any) {
    return this.http.post(
      this.url + "api/v1/getDashboardCountByBusiness",
      data
    );
  }
  getAllCategory(data: any) {
    return this.http.post(this.url + "api/v1/getAllCategory", data);
  }
  createCategory(data: any) {
    return this.http.post(this.url + "api/v1/createCategory", data);
  }
}
