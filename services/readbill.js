
const xlsx=require('xlsx');
const billfun=()=>{

    const workbook=xlsx.readFile(`MBH-B Feb 2024 Mess Bill.xlsx`);
    
    
    // Get the first sheet
    const sheetName = workbook.SheetNames[workbook.SheetNames.length-2];
    const sheet = workbook.Sheets[sheetName];
    
    // Convert the sheet to JSON format
    const data = xlsx.utils.sheet_to_json(sheet);
    let usedata=[];
    data.forEach((obj)=>{
        if(obj['Roll No.']!==undefined)
        {
    
            let temp={
                roomno:obj['Room No'],
                rollno:obj['Roll No.'],
                name:obj.Name,
                hostel:'MBH-B',
                bill:[{
                    month:2,
                    diet:obj['Diet '],
                    dietrate:obj['Diet Rate'],
                    diettotal:obj['D*diet rate'],
                    total:obj.Total,
                    extra:obj.Extra,
                    guest:obj.Guest? obj.Guest:0,
                    mis:`Track Suits=${obj['Track Suits']}`
                }]
            }
            usedata.push(temp);
        }
    })
    /*usedata.forEach((obj,id)=>{
        console.log(`this id${id} has this data   name:${obj.name}  roomno.:${obj.roomno}  and billtotal:${obj.bill[0].total}`);
    })*/
    //console.log(usedata);
    return usedata;
};
//console.log(billfun());
/*billfun().forEach((obj)=>{
    console.log(obj.bill);
})*/

module.exports=billfun;
