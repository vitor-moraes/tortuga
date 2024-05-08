class CreateHabits < ActiveRecord::Migration[7.1]
  def change
    create_table(:habits) do |t|
      t.string(:name, null: false)
      t.string(:nature, default: 'good')
      t.timestamps
    end
  end
end
