export interface UserI {
    id: number;
    first_name: string;
    last_name: string;
    hashed_password: string;
    email: string;
    language_id?: number;
    admin_level?: number;
    created_at?: Date;
    created_by?: bigint;
    updated_at?: Date;
    updated_by?: bigint;
    hubspot_id?: bigint;
    phone_number?: string;
    xero_id?: string;
    email_verified_at?: Date;
    is_active?: boolean;
    language: {
        id: number;
        iso_code: string;
        name: string;
        is_active: boolean;
    };
}
