const setData = (schema, data) => {
    const dataToSave = {
        name: data.name,
        imei: data.imei,
        information: {
            changes: data.changes,
            sleep_Struggle: data.sleep_Struggle,
            bed_time: data.bed_time,
            wake_up_time: data.wake_up_time,
            sleep_hours: data.sleep_hours
        }
    };

    for (const props in dataToSave) {
        let value = '';
        value = dataToSave[props];
        if (value) {
            schema[props] = value
        }
    }
    return schema;
};

module.exports = {
    setData: setData
};
