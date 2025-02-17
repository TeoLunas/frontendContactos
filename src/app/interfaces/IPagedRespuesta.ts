export interface IPagedRespuesta<T> {
    Data: T;
    PageNumber: number;
    PageSize: number;
    TotalRecords: number;
    TotalPages: number;
}
