require_relative "test_helper"

class HelpersTest < Minitest::Test
  include Rubx::Helpers

  class Rubx::Foo; end

  def test_object_representer
    klass = representer_class_for Object.new
    assert_equal Rubx::Representers::ObjectRepresenter, klass
  end

  def test_object_representer_for_unknown_class
    klass = representer_class_for Rubx::Foo.new
    assert_equal Rubx::Representers::ObjectRepresenter, klass
  end
end
