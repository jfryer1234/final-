class Favorite

  attr_reader :id

  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'final_development'})


  DB.prepare("create_favorite",
    <<-SQL
      INSERT INTO favorites (name, description)
      VALUES ($1, $2)
      RETURNING id, name, description;
    SQL
  )

  # update post
  DB.prepare("update_favorite",
    <<-SQL
      UPDATE favorites
      SET name = $2, description = $3
      WHERE id = $1
      RETURNING id, name, description;
    SQL
  )

  def self.all
    results = DB.exec("SELECT * FROM favorites ORDER BY id ASC;")
    return results.map do |result|
      {
          "id" => result["id"].to_i,
          "name" => result["name"],
          "description" => result["description"],

      }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM favorites WHERE id=#{id};")
    if !results.num_tuples.zero?
      return {
        "id" => results.first["id"].to_i,
         "name" => results.first["name"],
        "description" => results.first["description"]
      }
    else
      return {
        "error" => "no such thing, check the id!"
      }, status: 400
    end
  end

  def self.create(opts)
    results = DB.exec_prepared("create_favorite", [opts["name"], opts["description"]])
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "description" => results.first["description"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM favorites WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec_prepared("update_favorite", [id, opts["name"], opts["description"]])
    return {
      "id" => results.first["id"].to_i,
      "description" => results.first["description"],

    }
  end

end
