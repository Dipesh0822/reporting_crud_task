import { DynamicReportDTO } from "./../api/dto/report.dto";

async function executeReport(payload: DynamicReportDTO, sql_string: string) {
    let query = sql_string;
    let querSplit = query.split("%");
    let dataGet: DynamicReportDTO = payload;
    let get = Object.keys(dataGet.parameters)
    let queryFinal = querSplit[0] + " ";
    for (let index = 0; index < get.length; index++) {
        const element = querSplit[index + 1].split(" ").map((data) => {
            if (data === get[index]) {
                let fff = get[index]
                return `'${dataGet.parameters[fff]}'`
            } else {
                return `${data}`
            }
        }).join(" ");
        queryFinal += element;
    }
    queryFinal += ` limit ${dataGet.limit} offset ${dataGet.offset}`;
    return queryFinal;
}

export { executeReport };
