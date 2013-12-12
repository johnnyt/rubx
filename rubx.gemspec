# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rubx"
  s.version = "0.1.0.20131212111611"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["JohnnyT"]
  s.date = "2013-12-12"
  s.description = "A Multi-Dimensional system in Ruby"
  s.email = ["ubergeek3141@gmail.com"]
  s.extra_rdoc_files = ["CHANGELOG.md", "CONTRIBUTING.md", "LICENSE.md", "Manifest.txt", "README.md"]
  s.files = ["CHANGELOG.md", "CONTRIBUTING.md", "LICENSE.md", "Manifest.txt", "README.md", "Rakefile", "lib/rubx.rb", "lib/rubx/parser.rb", "lib/rubx/version.rb", "rubx.gemspec", "test/helper.rb", "test/version_test.rb", ".gemtest"]
  s.homepage = "https://github.com/johnnyt/rubx"
  s.licenses = ["MIT"]
  s.rdoc_options = ["--main", "README.md"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "rubx"
  s.rubygems_version = "1.8.23"
  s.summary = "A Multi-Dimensional system in Ruby"
  s.test_files = ["test/version_test.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<parslet>, [">= 1.0"])
      s.add_development_dependency(%q<rdoc>, ["~> 4.0"])
      s.add_development_dependency(%q<minitest>, [">= 5.0"])
      s.add_development_dependency(%q<hoe>, ["~> 3.7"])
    else
      s.add_dependency(%q<parslet>, [">= 1.0"])
      s.add_dependency(%q<rdoc>, ["~> 4.0"])
      s.add_dependency(%q<minitest>, [">= 5.0"])
      s.add_dependency(%q<hoe>, ["~> 3.7"])
    end
  else
    s.add_dependency(%q<parslet>, [">= 1.0"])
    s.add_dependency(%q<rdoc>, ["~> 4.0"])
    s.add_dependency(%q<minitest>, [">= 5.0"])
    s.add_dependency(%q<hoe>, ["~> 3.7"])
  end
end
