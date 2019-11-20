module.exports = {
    questList =['', '', '', '', '', '', '', '', '', '']
}

for (let i = 0; i < questList.length; i++) {
    document.getElementById('questions').innerHTML(`

    <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
    `)
    
}

