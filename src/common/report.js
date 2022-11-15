
async function executeReport(payload, sql_string) {
    let query = sql_string;
    let querSplit = query.split("%");
    let dataGet = payload;
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

module.exports = { executeReport };