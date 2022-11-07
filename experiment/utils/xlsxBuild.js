import xlsx from 'node-xlsx';

const getFormattedDataFromExperimentForExel = (experiment) => {
    const header = ['date', 'tempRoom', 'tempWater', 'lightSensor', 'lightWorkingTime', 'lightOffTime', 'pumpTime', 'pumpSleep', 'danger'];
    const body = experiment.measurements.map(measurement => {
        return header.map(key => measurement[key])
    });

    return [
        header,
        ...body
    ]
}

const xlsxBuild = (experiment) => {
    const data = getFormattedDataFromExperimentForExel(experiment);
    const sheetOptions = {
        '!cols': Array(data[0].length).fill({ wch: 20 })
    };
    console.log(data.slice(0, 30))
    const buffer = xlsx.build(
        [
            {
                name: experiment.title.slice(0, 31),
                data: data
            }
        ],
        {
            sheetOptions
        }
    );

    return buffer;
};

export default xlsxBuild;