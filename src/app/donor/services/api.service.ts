import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getDonors(){
    return this.http.get<any>(`${environment.api_baseurl}/Donor`);
  }
  PostDonor(data :any){
    return this.http.post<any>(`${environment.api_baseurl}/Donor`,data);
  }

  // AffectedIndividual
  getAffectedIndividuals(){
    return this.http.get<any>(`${environment.api_baseurl}/AffectedIndividual`);
  }
  PostAffectedIndividual(data :any){
    return this.http.post<any>(`${environment.api_baseurl}/AffectedIndividual`,data);
  }

  // Aids
  getAids(){
    return this.http.get<any>(`${environment.api_baseurl}/aid`);
  }
  PostAid(data :any){
    return this.http.post<any>(`${environment.api_baseurl}/aid`,data);
  }
    // IndividualRequests
  getIndividualRequests(){
    return this.http.get<any>(`${environment.api_baseurl}/IndividualRequest`);
  }
  getIndividualRequestsDetails(id:number){
    return this.http.get<any>(`${environment.api_baseurl}/IndividualRequest/${id}`);
  }
  postIndividualRequest(data :any){
    return this.http.post<any>(`${environment.api_baseurl}/IndividualRequest`,data);
  }
  // inventory
  //api/Inventory/Warehouse
  getInventoryCountByType(type :string){
    return this.http.get<any>(`${environment.api_baseurl}/Inventory/${type}`);
  }

  //DisbursesAid
  getDisbursesAid(id:number){
    return this.http.get<any>(`${environment.api_baseurl}/DisbursesAid/${id}`);
  }
  postDisbursesAid(data:any){
    return this.http.post<any>(`${environment.api_baseurl}/DisbursesAid`,data);
  }
  putDisbursesAidState(data:any){
    return this.http.put<any>(`${environment.api_baseurl}/DisbursesAid`,data);
  }

}
