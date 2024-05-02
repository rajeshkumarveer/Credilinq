import pool from "../../../utils/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  let query = `SELECT * from form ORDER BY "createdAt"  DESC;`;
  const result = await pool.query(query);
  return NextResponse.json({ data: result.rows });
}

export async function POST(request) {
  const body = await request.json();
  const query = `
    INSERT INTO form ("fullName", "postition", "emailId", "companyUEN", "companyName")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;
  `;

  const values = [
    body.data.fullName,
    body.data.postition,
    body.data.emailId,
    body.data.companyUEN,
    body.data.companyName,
  ];
  const result = await pool.query(query, values);
  console.log(result.rows[0]);
  return NextResponse.json({ data : result.rows[0]});
}