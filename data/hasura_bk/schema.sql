CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.agencies (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data json,
    description jsonb,
    media jsonb
);
CREATE TABLE public.amenities (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name jsonb NOT NULL,
    media jsonb,
    ext_data jsonb
);
CREATE TABLE public.comp_phases (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    compound_id uuid NOT NULL,
    phase_name json NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data json,
    delivery_month integer,
    delivery_year integer
);
CREATE TABLE public.compounds (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name json NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    developer_id uuid,
    ext_data jsonb,
    slug_ar text,
    slug_en text,
    description jsonb,
    media jsonb,
    sk_id text,
    city_sk_id text,
    district_sk_id text,
    east real,
    north real,
    south real,
    west real
);
CREATE TABLE public.developers (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name jsonb NOT NULL,
    ext_data jsonb,
    slug_en text NOT NULL,
    slug_ar text NOT NULL,
    description jsonb,
    media jsonb,
    sk_id text
);
CREATE TABLE public.front_actions (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    action_name jsonb NOT NULL,
    trackable boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data json,
    description jsonb,
    media jsonb
);
CREATE TABLE public.leads (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    unit_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data jsonb,
    contact_details jsonb
);
CREATE TABLE public.location (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data jsonb,
    parent_id uuid
);
CREATE TABLE public.property_types (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name json NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    media jsonb,
    ext_data jsonb,
    sk_id text
);
CREATE TABLE public.units (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    property_type_id uuid NOT NULL,
    compound_id uuid NOT NULL,
    comp_phase_id uuid,
    delivery_year integer,
    delivery_month integer,
    description jsonb,
    finishing_type text NOT NULL,
    unit_design text,
    lat real,
    lng real,
    media jsonb,
    amenities_arr jsonb,
    deleted_at timestamp with time zone,
    ref_id text NOT NULL,
    sk_id text,
    slug_en text,
    slug_ar text,
    fin_down_payment integer,
    fin_years integer,
    fin_monthly_payment integer,
    bathrooms integer,
    bedrooms integer,
    npv integer,
    bua integer,
    land integer,
    fin_total integer,
    sk_city jsonb,
    sk_district jsonb,
    developer_id uuid NOT NULL,
    sk_phase jsonb
);
CREATE TABLE public.user_roles (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    developer_id uuid,
    roles json NOT NULL,
    ext_data json
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    username text NOT NULL,
    passwired text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data json,
    email text,
    name text
);
CREATE TABLE public.users_front_actions (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    front_action_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data json,
    description jsonb,
    media jsonb
);
ALTER TABLE ONLY public.amenities
    ADD CONSTRAINT amenities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.comp_phases
    ADD CONSTRAINT comp_phases_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.compounds
    ADD CONSTRAINT compounds_sk_id_key UNIQUE (sk_id);
ALTER TABLE ONLY public.developers
    ADD CONSTRAINT developer_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.developers
    ADD CONSTRAINT developers_slug_ar_key UNIQUE (slug_ar);
ALTER TABLE ONLY public.developers
    ADD CONSTRAINT developers_slug_en_key UNIQUE (slug_en);
ALTER TABLE ONLY public.front_actions
    ADD CONSTRAINT front_actions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.compounds
    ADD CONSTRAINT project_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.property_types
    ADD CONSTRAINT property_types_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_sk_id_key UNIQUE (sk_id);
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_slug_ar_key UNIQUE (slug_ar);
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_slug_en_key UNIQUE (slug_en);
ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users_front_actions
    ADD CONSTRAINT users_front_actions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
CREATE TRIGGER set_public_amenities_updated_at BEFORE UPDATE ON public.amenities FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_amenities_updated_at ON public.amenities IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_comp_phases_updated_at BEFORE UPDATE ON public.comp_phases FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comp_phases_updated_at ON public.comp_phases IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_developer_updated_at BEFORE UPDATE ON public.developers FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_developer_updated_at ON public.developers IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_leads_updated_at BEFORE UPDATE ON public.leads FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_leads_updated_at ON public.leads IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_project_updated_at BEFORE UPDATE ON public.compounds FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_project_updated_at ON public.compounds IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_property_types_updated_at BEFORE UPDATE ON public.property_types FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_property_types_updated_at ON public.property_types IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_units_updated_at BEFORE UPDATE ON public.units FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_units_updated_at ON public.units IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.comp_phases
    ADD CONSTRAINT comp_phases_compound_id_fkey FOREIGN KEY (compound_id) REFERENCES public.compounds(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_unit_id_fkey FOREIGN KEY (unit_id) REFERENCES public.units(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.compounds
    ADD CONSTRAINT project_developer_id_fkey FOREIGN KEY (developer_id) REFERENCES public.developers(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_comp_phase_id_fkey FOREIGN KEY (comp_phase_id) REFERENCES public.comp_phases(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_compound_id_fkey FOREIGN KEY (compound_id) REFERENCES public.compounds(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_developer_id_fkey FOREIGN KEY (developer_id) REFERENCES public.developers(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_property_type_id_fkey FOREIGN KEY (property_type_id) REFERENCES public.property_types(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.users_front_actions
    ADD CONSTRAINT users_front_actions_front_action_id_fkey FOREIGN KEY (front_action_id) REFERENCES public.front_actions(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.users_front_actions
    ADD CONSTRAINT users_front_actions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
