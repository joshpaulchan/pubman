
export const schema = () => {
    return `
    create table requests (
        id INT,
        name TEXT,
        createdAt DATE,
        updatedAt DATE,
        endpoint VARCHAR(40),
        endpointTypeId INT
    );    
    `;
}