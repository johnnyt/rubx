require_relative "../test_helper"

class ObjectRepresenterTest < Minitest::Test
  include Rubx::Representers

  def test_object_id
    obj = Object.new
    rep = ObjectRepresenter.new obj

    assert_equal obj.object_id, rep.to_hash.fetch("object_id")
  end
end
