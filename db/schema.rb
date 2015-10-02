# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150611225059) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "roles_mask"
  end

  add_index "accounts", ["confirmation_token"], name: "index_accounts_on_confirmation_token", unique: true, using: :btree
  add_index "accounts", ["email"], name: "index_accounts_on_email", unique: true, using: :btree
  add_index "accounts", ["reset_password_token"], name: "index_accounts_on_reset_password_token", unique: true, using: :btree
  add_index "accounts", ["unlock_token"], name: "index_accounts_on_unlock_token", unique: true, using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "type"
    t.string   "name"
    t.string   "description"
    t.string   "ancestry"
    t.integer  "position"
    t.boolean  "is_active",          default: true
    t.integer  "tagable_id"
    t.string   "tagable_type"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "categories", ["tagable_type", "tagable_id"], name: "index_categories_on_tagable_type_and_tagable_id", using: :btree

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "departments", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "ancestry"
    t.integer  "position"
    t.integer  "category_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.text     "introduction"
    t.boolean  "show_in_menu"
  end

  create_table "departments_diseases", id: false, force: :cascade do |t|
    t.integer "department_id"
    t.integer "disease_id"
  end

  add_index "departments_diseases", ["department_id"], name: "index_departments_diseases_on_department_id", using: :btree
  add_index "departments_diseases", ["disease_id"], name: "index_departments_diseases_on_disease_id", using: :btree

  create_table "departments_services", id: false, force: :cascade do |t|
    t.integer "department_id"
    t.integer "service_id"
  end

  add_index "departments_services", ["department_id"], name: "index_departments_services_on_department_id", using: :btree
  add_index "departments_services", ["service_id"], name: "index_departments_services_on_service_id", using: :btree

  create_table "departments_specialities", id: false, force: :cascade do |t|
    t.integer "department_id"
    t.integer "speciality_id"
  end

  add_index "departments_specialities", ["department_id"], name: "index_departments_specialities_on_department_id", using: :btree
  add_index "departments_specialities", ["speciality_id"], name: "index_departments_specialities_on_speciality_id", using: :btree

  create_table "diseases", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "diseases_services", id: false, force: :cascade do |t|
    t.integer "disease_id"
    t.integer "service_id"
  end

  add_index "diseases_services", ["disease_id"], name: "index_diseases_services_on_disease_id", using: :btree
  add_index "diseases_services", ["service_id"], name: "index_diseases_services_on_service_id", using: :btree

  create_table "doctors", force: :cascade do |t|
    t.string   "name"
    t.string   "experience"
    t.text     "resume"
    t.integer  "department_id"
    t.integer  "speciality_id"
    t.string   "photography_file_name"
    t.string   "photography_content_type"
    t.integer  "photography_file_size"
    t.datetime "photography_updated_at"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "pages", force: :cascade do |t|
    t.string   "type"
    t.string   "title"
    t.text     "subtitle"
    t.text     "content"
    t.date     "date"
    t.boolean  "is_active",          default: true
    t.string   "ancestry"
    t.integer  "position"
    t.integer  "pagable_id"
    t.string   "pagable_type"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "pages", ["pagable_type", "pagable_id"], name: "index_pages_on_pagable_type_and_pagable_id", using: :btree

  create_table "service_groups", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.integer  "service_group_id"
    t.string   "name"
    t.text     "description"
    t.string   "ancestry"
    t.integer  "position"
    t.boolean  "is_active",        default: true
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  create_table "slides", force: :cascade do |t|
    t.string   "name"
    t.string   "title"
    t.text     "description"
    t.string   "link"
    t.string   "ancestry"
    t.integer  "position"
    t.boolean  "is_active",          default: true
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "specialities", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
