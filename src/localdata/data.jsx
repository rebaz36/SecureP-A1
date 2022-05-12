let data = []
export default function addtodata(Email, Password) {
    data =  [...data, { Email, Password }]
    console.log(data)
}
export function getdata() {
    return data
}

export function getpassword() {
    return data[0].Password
}