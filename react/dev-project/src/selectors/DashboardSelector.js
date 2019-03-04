
export default (metric = [], filterByYear = undefined, filterByMonth = undefined, sortBy = "") => {
    return (((metric.filter((data) => {
        if (Boolean(filterByYear) == false || filterByYear == "-- Filter By Year --")
            return true;
        else {
            return data.year == filterByYear;
        }
    }
    )).filter((data) => {
        if (Boolean(filterByMonth) == false || filterByMonth == "All Month")
            return true;
        else {
            return data.month == filterByMonth;
        }
    })).sort((a, b) => {
        if (sortBy == "Month") {
            return a.month - b.month;
        }
        else if (sortBy == "Year") {
            return a.year - b.year;
        }
        return 0;
    }))

}
