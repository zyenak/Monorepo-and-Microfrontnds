export const db_host = String(process.env.DB_HOST || "localhost");
export const db_port = Number(process.env.DB_PORT || 5432);
export const db_name = String(process.env.DB_NAME || "postgres");
export const db_user = String(process.env.DB_USER || "postgres");
export const db_password = String(process.env.DB_PASSWORD || "password");