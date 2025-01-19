export const exportToCSV = (data, filename = 'data.csv') => {
    const csv = data
      .map((row) => Object.values(row).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };
  
  export const importFromCSV = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const rows = reader.result.split('\n').map((row) => row.split(','));
        resolve(rows);
      };
      reader.readAsText(file);
    });
  };
  