import React from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import TrashIcon from "../../components/atoms/icons/trashIcon";
import UploadIcon from "../../components/atoms/icons/uploadIcon";
import Sidebar from "../../components/organisms/sidebar";

type Props = {};

function Profile({}: Props) {
  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar activePath="/member/settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <Form action="#/">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width={90}
                      height={90}
                      className="avatar img-fluid rounded-circle"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <TrashIcon />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <div
                        style={{
                          height: 90,
                          width: 90,
                        }}
                      >
                        <UploadIcon />
                      </div>
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="name"
                    className="text-lg fw-medium color-palette-1 mb-10"
                  >
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-pill text-lg"
                    id="name"
                    name="name"
                    aria-describedby="name"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="email"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="phone"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className="rounded-pill text-lg"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
                <div className=" button-group d-flex flex-column pt-50">
                  <Button
                    type="submit"
                    className="btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Profile;
