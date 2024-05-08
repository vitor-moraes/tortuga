class CreateSchedules < ActiveRecord::Migration[7.1]
  def change
    create_table :schedules do |t|
      t.datetime :recurrence_start
      t.datetime :recurrence_end
      t.string :type
      t.integer :day_of_week
      t.integer :month
      t.integer :day_of_month

      t.timestamps
    end
  end
end
