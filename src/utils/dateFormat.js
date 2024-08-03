export const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }
    return date;
};