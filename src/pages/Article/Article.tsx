import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  Table,
  Tag,
} from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface Article {
  key: string;
  title: string;
  author: string;
  publishedDate: string;
  views: number;
  likes: number;
  comments: number;
  content: string;
  status: "Published" | "Draft";
}

const mockArticles: Article[] = Array.from({ length: 50 }, (_, i) => ({
  key: i.toString(),
  title: `Article ${i + 1}`,
  author: `Author ${(i % 5) + 1}`,
  publishedDate: dayjs().subtract(i, "days").format("YYYY-MM-DD"),
  views: Math.floor(Math.random() * 10000),
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 500),
  content: `This is the content of article ${
    i + 1
  }. It contains details about the topic discussed.`,
  status: i % 3 === 0 ? "Draft" : "Published",
}));

const Article: React.FC = () => {
  const [data, setData] = useState<Article[]>(mockArticles);
  const [filteredData, setFilteredData] = useState<Article[]>(mockArticles);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [searchText, setSearchText] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[string, string] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [form] = Form.useForm();

  const authors = Array.from(
    new Set(mockArticles.map((article) => article.author))
  );

  const filterData = () => {
    let result = [...data];

    if (searchText) {
      result = result.filter((article) =>
        article.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedAuthor) {
      result = result.filter((article) => article.author === selectedAuthor);
    }

    if (dateRange) {
      const [start, end] = dateRange;
      result = result.filter((article) => {
        const articleDate = dayjs(article.publishedDate);
        return (
          articleDate.isAfter(dayjs(start)) && articleDate.isBefore(dayjs(end))
        );
      });
    }

    setFilteredData(result);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  useEffect(() => {
    filterData();
  }, [searchText, selectedAuthor, dateRange, data]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    sorter: SorterResult<Article> | SorterResult<Article>[]
  ) => {
    setPagination(pagination);

    if (Array.isArray(sorter)) {
      // Handle multiple sorters if needed
    } else {
      if (sorter.field && sorter.order) {
        const field = sorter.field as keyof Article;
        const order = sorter.order === "ascend" ? 1 : -1;

        setFilteredData((prev) =>
          [...prev].sort((a, b) => {
            if (field === "publishedDate") {
              return order * (dayjs(a[field]).unix() - dayjs(b[field]).unix());
            }
            return order * ((a[field] as number) - (b[field] as number));
          })
        );
      }
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    form.setFieldsValue({
      title: article.title,
      content: article.content,
      status: article.status,
    });
    setIsModalVisible(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setData((prev) =>
        prev.map((item) =>
          item.key === editingArticle?.key ? { ...item, ...values } : item
        )
      );

      message.success("Article updated successfully");
      setIsModalVisible(false);
      setEditingArticle(null);
    } catch (error) {
      console.error("Validation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnsType<Article> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "25%",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      filters: authors.map((author) => ({ text: author, value: author })),
      filteredValue: selectedAuthor ? [selectedAuthor] : null,
      onFilter: (value, record) => record.author === value,
    },
    {
      title: "Published",
      dataIndex: "publishedDate",
      key: "publishedDate",
      sorter: true,
      render: (date) => dayjs(date).format("MMM D, YYYY"),
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
      sorter: true,
    },
    {
      title: "Likes",
      dataIndex: "likes",
      key: "likes",
      sorter: true,
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Published" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        />
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Articles</h2>

      <div className="mb-6 space-y-4 md:space-y-0 md:flex md:space-x-4">
        <Input
          placeholder="Search by title"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-64"
        />

        <Select
          placeholder="Filter by author"
          options={authors.map((author) => ({ value: author, label: author }))}
          value={selectedAuthor}
          onChange={setSelectedAuthor}
          allowClear
          className="w-full md:w-64"
        />

        <RangePicker
          onChange={(_, dateStrings) =>
            setDateRange(dateStrings as [string, string])
          }
          className="w-full md:w-64"
        />
      </div>

      <Table
        columns={columns}
        rowKey="key"
        dataSource={filteredData}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        scroll={{ x: true }}
        className="shadow-sm border-gray-500 rounded-lg"
      />

      <Modal
        title="Edit Article"
        open={isModalVisible}
        onOk={handleSave}
        onCancel={() => setIsModalVisible(false)}
        confirmLoading={loading}
        width={500}
        centered
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select a status!" }]}
          >
            <Select>
              <Select.Option value="Published">Published</Select.Option>
              <Select.Option value="Draft">Draft</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Article;
